from fastapi import APIRouter

import app.cruds.rent as dao
from app.schemas.rent import Rent


router = APIRouter()


