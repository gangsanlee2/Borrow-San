
from typing import List, Optional
from pydantic import BaseModel
from app.schemas.article import Article
from app.schemas.rent import Rent


class UserVO(BaseModel):
    class Config:
        orm_mode = True


class UserDTO(UserVO):
    user_id: Optional[str]
    age: Optional[str]
    address: Optional[str]
    most_use_loc: Optional[str]
    cur_lat: Optional[str]
    cur_lng: Optional[str]
    birth: Optional[str]
    grade: Optional[str]
    pay_info: Optional[str]
    password: Optional[str]
    email: Optional[str]
    gender: Optional[str]
    token: Optional[str]
    created_at: Optional[str]
    updated_at: Optional[str]


class UserList(UserVO):
    user_id: Optional[str]
    age: Optional[str]
    address: Optional[str]
    most_use_loc: Optional[str]
    cur_lat: Optional[str]
    cur_lng: Optional[str]
    birth: Optional[str]
    grade: Optional[str]
    pay_info: Optional[str]
    password: Optional[str]
    email: Optional[str]
    gender: Optional[str]
    token: Optional[str]


class UserDetail(UserDTO):
    articles: List[Article] = []
    rents: List[Rent] = []


class UserUpdate(BaseModel):
    user_id: Optional[str]
    address: Optional[str]
    most_use_loc: Optional[str]
    cur_lat: Optional[str]
    cur_lng: Optional[str]
    grade: Optional[str]
    pay_info: Optional[str]
    gender: Optional[str]
    token: Optional[str]
    updated_at: Optional[str]

    class Config:
        orm_mode = True