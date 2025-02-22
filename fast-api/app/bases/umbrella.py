from abc import ABCMeta, abstractmethod
from typing import List

from app.models.umbrella import Umbrella
from app.schemas.umbrella import UmbrellaDTO


class UmbrellaBase(metaclass=ABCMeta):

    @abstractmethod
    def add_umbrella(self, request_umbrella: UmbrellaDTO) -> str: pass

    @abstractmethod
    def update_umbrella(self, request_umbrella: UmbrellaDTO) -> str: pass

    @abstractmethod
    def delete_umbrella(self, request_umbrella: UmbrellaDTO) -> str: pass

    @abstractmethod
    def fina_all_umbrellas(self, request_umbrella: UmbrellaDTO) -> List[Umbrella]: pass

    @abstractmethod
    def find_umbrella_by_id(self, request_umbrella: UmbrellaDTO) -> UmbrellaDTO: pass

    @abstractmethod
    def count_all_umbrellas(self, request_umbrella: UmbrellaDTO) -> int: pass