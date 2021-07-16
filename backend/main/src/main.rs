pub mod api;
pub mod routes;
pub mod views;

fn main() {
    match api::create_builder("key.pem", "cert.pem") {
        Ok(builder) => match api::start(builder) {
            Ok(_) => {}
            Err(_) => println!("Error occured while starting server."),
        },
        Err(_) => {
            println!("Error occured while loading tls certificates. Falling back to http server.");
            match api::start_http() {
                Ok(_) => {}
                Err(_) => println!("Error occured while starting Http server."),
            }
        }
    }
}
