
from uuid import UUID

from pydantic import BaseModel

from app.schemas.article import Article
from app.schemas.rent import Rent
from app.schemas.stand import Stand
from app.schemas.umbrella import Umbrella
from app.schemas.user import UserDTO
from typing import List, Optional


class AdminDTO(BaseModel):
    admin_id: Optional[str]
    name: Optional[str]
    password: Optional[str]
    token: Optional[str]
    created_at: Optional[str]
    updated_at: Optional[str]

    class Config:
        orm_mode = True


class AdminDetail(AdminDTO):
    stands: List[Stand] = []
    umbrellas: List[Umbrella] = []
    articles: List[Article] = []
    users: List[UserDTO] = []
    rents: List[Rent] = []
