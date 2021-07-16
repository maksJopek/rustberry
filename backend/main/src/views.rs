use actix_web::{HttpRequest, HttpResponse, Responder};

pub async fn hello(_req: HttpRequest) -> impl Responder {
    HttpResponse::Ok().body("Hello!")
}
