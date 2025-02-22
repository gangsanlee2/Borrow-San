from abc import abstractmethod, ABCMeta
from typing import List
from app.models.article import Article
from app.schemas.article import ArticleDTO
from app.schemas.user import UserDTO


class ArticleBase(metaclass=ABCMeta):

    @abstractmethod
    def add_article(self, request_article: ArticleDTO): pass

    @abstractmethod
    def delete_article(self, request_user: ArticleDTO): pass

    @abstractmethod
    def update_article(self, request_user: ArticleDTO): pass

    @abstractmethod
    def find_all_articles(self, request_article: ArticleDTO) -> List[Article]: pass

    @abstractmethod
    def find_articles_by_userid(self, request_article: ArticleDTO) -> List[Article]: pass

    @abstractmethod
    def find_articles_by_title(self, request_article: ArticleDTO) -> List[Article]: pass
