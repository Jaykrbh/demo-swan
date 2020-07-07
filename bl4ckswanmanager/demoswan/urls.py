from rest_framework import routers
from .api import SwanViewSet

router = routers.DefaultRouter()
router.register('api/demoswan', SwanViewSet,'Swan')


urlpatterns = router.urls
