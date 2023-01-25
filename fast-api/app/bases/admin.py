from abc import abstractmethod, ABCMeta
from typing import List
from sqlalchemy.orm import Session

from app.models.admin import Admin
from app.schemas.admin import AdminDTO, AdminUpdate


class AdminBase(metaclass=ABCMeta):

    @abstractmethod
    def add_admin(self, request_admin: AdminDTO) -> str: pass

    @abstractmethod
    def login(self, request_admin: AdminDTO) -> str: pass

    @abstractmethod
    def logout(self, request_admin: AdminDTO) -> str: pass

    @abstractmethod
    def update_token(self, db_admin: Admin, new_token: str) -> str: pass

    @abstractmethod
    def update_password(self, request_admin: AdminDTO) -> str: pass

    @abstractmethod
    def delete_admin(self, request_admin: AdminDTO) -> str: pass

    @abstractmethod
    def find_all_admins_ordered(self) -> List[Admin]: pass

    @abstractmethod
    def find_admin_by_token(self, request_admin: AdminDTO) -> User: pass

    @abstractmethod
    def find_admin_by_id(self, request_admin: AdminDTO) -> User: pass

    @abstractmethod
    def find_admin_by_id_for_update(self, request_admin: AdminUpdate) -> User: pass

    @abstractmethod
    def find_all_admins(self) -> List[Admin]: pass

    @abstractmethod
    def match_token(self, request_admin: AdminDTO) -> bool: pass

    @abstractmethod
    def count_all_admins(self) -> int: pass


