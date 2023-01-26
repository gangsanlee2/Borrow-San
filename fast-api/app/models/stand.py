from uuid import uuid4

from pydantic import BaseConfig
from sqlalchemy.orm import relationship
from sqlalchemy_utils import UUIDType
from ..database import Base
from sqlalchemy import Column, String, Integer, ForeignKey


class Stand(Base):

    __tablename__ = "stands"
    stand_id = Column(UUIDType(binary=False), primary_key=True, default=uuid4)
    district = Column(String(20), nullable=False)
    latitude = Column(Integer)
    longitude = Column(Integer)

    admin_id = Column(UUIDType(binary=False), ForeignKey("admins.admin_id"), nullable=True)

    umbrellas = relationship('Umbrella', back_populates='stand')
    admin = relationship('Admin', back_populates='stands')

    class Config:
        BaseConfig.arbitrary_types_allowed = True
