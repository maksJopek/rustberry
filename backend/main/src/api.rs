use actix_web::{web, App, HttpServer};
use openssl::ssl::{SslAcceptor, SslAcceptorBuilder, SslFiletype, SslMethod};

use crate::routes;

#[actix_web::main]
pub async fn start_http() -> std::io::Result<()> {
    HttpServer::new(|| App::new().service(web::scope("/api").configure(routes::routes)))
        .bind("127.0.0.1:8080")?
        .run()
        .await
}

#[actix_web::main]
pub async fn start(builder: SslAcceptorBuilder) -> std::io::Result<()> {
    HttpServer::new(|| App::new().service(web::scope("/api").configure(routes::routes)))
        .bind_openssl("127.0.0.1:8000", builder)?
        .run()
        .await
}

pub fn create_builder(key: &str, cert: &str) -> std::io::Result<SslAcceptorBuilder> {
    let mut builder = SslAcceptor::mozilla_intermediate(SslMethod::tls())?;
    builder.set_private_key_file(key, SslFiletype::PEM)?;
    builder.set_certificate_chain_file(cert)?;

    Ok(builder)
}
