from django.urls import path

urlspatterns = [
    path('/'),
    path("posts"),
    path("posts/<slug>") # slug concept
]