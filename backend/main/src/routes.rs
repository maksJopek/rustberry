use actix_web::web;

use crate::views;

pub fn routes(cfg: &mut web::ServiceConfig) {
    cfg.route("/", web::post().to(views::hello));
}
