if Rails.env == "production"
    Rails.application.config.session_store :cookie_store, key: "_rugby_app", domain: "file:/home/zjschulz/rugby_app/rugby_app_frontend/public/index.html"
else
    Rails.application.config.session_store :cookie_store, key: "_rugby_app"
end