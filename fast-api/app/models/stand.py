from uuid import uuid4

from pydantic import BaseConfig
from sqlalchemy.orm import relationship
from sqlalchemy_utils import UUIDType
from .mixins import TimestampMixin
from ..database import Base
from sqlalchemy import Column, String, Integer


class Stand(Base, TimestampMixin):
    __tablename__ = "stands"
    stand_id = Column(UUIDType(binary=False), primary_key=True, default=uuid4)
    district = Column(String(20), nullable=False)
    latitude = Column(Integer)
    longitude = Column(Integer)


    umbrella = relationship('Umbrella', back_populates='stand')


    class Config:
        BaseConfig.arbitrary_types_allowed = True


