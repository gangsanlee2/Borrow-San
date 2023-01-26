from abc import ABC
from typing import List

import pymysql
from sqlalchemy.orm import Session

from app.bases.umbrella import UmbrellaBase
from app.models.umbrella import Umbrella
from app.schemas.umbrella import UmbrellaDTO

pymysql.install_as_MySQLdb()


class UmbrellaCrud(UmbrellaBase, ABC):
    def __init__(self, db: Session):
        self.db: Session = db

    def add_umbrella(self, request_umbrella: UmbrellaDTO) -> str:
        pass

    def update_umbrella(self, request_umbrella: UmbrellaDTO) -> str:
        pass

    def delete_umbrella(self, request_umbrella: UmbrellaDTO) -> str:
        pass

    def fina_all_umbrellas(self, request_umbrella: UmbrellaDTO) -> List[Umbrella]:
        pass

    def find_umbrella_by_id(self, request_umbrella: UmbrellaDTO) -> UmbrellaDTO:
        pass

    def count_all_umbrellas(self, request_umbrella: UmbrellaDTO) -> int:
        pass
