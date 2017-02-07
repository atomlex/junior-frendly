'use strict';

var app = angular.module('juniorFriendlyApp', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {

  $routeProvider
  .when('/home', {
      templateUrl: 'parts/main.html'
    })
  .when('/about', {
      templateUrl: 'parts/about.html'
  })
  .when('/work', {
      templateUrl: 'parts/work-list.html',
      controller: 'CompanyListController'
  })
  .when('/traineeship', {
      templateUrl: 'parts/traineeship-list.html',
      controller: 'CompanyListController'
  })
  .otherwise({
    redirectTo: '/home'
  });
}]);

app.controller('MenyController', function MenyController($scope) {
  $scope.menuLinks = [
    {
      link: '#!/home',
      lable: 'Главная'
    },
    {
      link: '#!/work',
      lable: 'Работа'
    },
    {
      link: '#!/traineeship',
      lable: 'Стажировка'
    },
    {
      link: '#!/about',
      lable: 'О проекте'
    }
  ]
});

app.controller('CompanyListController', ['$scope', '$http', '$location', function CompanyListController($scope, $http, $location) {
  $scope.companies = [
    {
      name: 'Тинькофф банк',
      companyLink: 'https://www.tinkoff.ru/',
      logo:'logo/tinkoff.ico',
      vacancyName:'Верстальщик',
      requirements: ['Soft-skills', 'Хорошее знание теории', 'Огонь в глазах'],
      description: 'Полный рабочий день.',
      location: ['Москва'],
      contacts: {
        email: 'mailto:yakhin.v@gmail.com',
        tel: 'tel:+79032320810',
        person: '',
        contactLink: '',
      },
      work: true,
    },
    {
      name:'Мел',
      companyLink: '',
      logo:'logo/mel.jpg',
      vacancyName:'Junior javascript developer',
      requirements: ['Обязательно: ООП, базовое представление о web разработке', 'Светлая голова, прямые руки, горящие глаза', 'Профильное образование или опыт программирования на других языках', 'Огромным плюсом будут личные программистские проекты или наброски. Все, что может продемонстрировать увлеченность программированием'],
      description: 'Полный рабочий день.',
      location: ['Москва'],
      contacts: {
        email: '',
        tel: '',
        person: '',
        contactLink: 'https://career.ru/vacancy/19329610',
      },
      work: true,
    },
    {
      name:'i-Sys.ru',
      companyLink: 'http://www.i-sys.ru/',
      logo:'logo/isys.png',
      vacancyName:'Junior developer',
      requirements: ['Наличие неольшого портфолио.', 'Горящие глаза.', 'Минимум по вёрстке кроссбраузерная/адаптивная.', 'Js умение пользоваться инструментами автоматизации.', 'Работа хотябы с одним нормальным фреймворком.'],
      description: 'Аутсорс.',
      location: ['Самара', 'Тольятти', 'Оренбург'],
      contacts: {
        email: '',
        tel: '',
        person: '',
        contactLink: '',
      },
      work: true,
    },
    {
      name:'НТЦ Элинс',
      companyLink: 'http://www.elins.ru/',
      logo:'logo/elins.png',
      vacancyName:'Веб-разработчик',
      requirements: ['Rails проект на базе Redmine. Автоматизация производства.', 'Ищутся как бэк разработчики так и фронтендеры.'],
      description: 'Полный рабочий день.',
      location: ['Зеленоград'],
      contacts: {
        email: '',
        tel: '',
        person: '',
        contactLink: 'https://hh.ru/employer/790859',
      },
      work: true,
    },
    {
      name:'Казанский федеральный университет',
      companyLink: 'http://kpfu.ru/',
      logo:'logo/kfy.jpg',
      vacancyName:'Стажировка для web-разработчиков',
      requirements: ['Базовые знания веб-технологий: HTML, CSS, JS.', 'Общее понимание как работает web.', 'Сильное желание развиваться в этом направлении.', 'Наличие каких либо уже сделанных/свертанных проектов/сайтов будет плюсом.'],
      description: 'Режим работы по договоренности.',
      location: ['Казань'],
      contacts: {
        email: 'mailto:SVMochalov@kpfu.ru',
        tel: '',
        person: '',
        contactLink: '',
      },
      work: false,
    },
    {
      name:'T-systems',
      companyLink: 'http://www.t-systems.ru/',
      logo:'logo/t.jpg',
      vacancyName:'Оплачиваемая стажировка для Java-разработчиков и QA',
      requirements: ['Интерес к области разработки ПО;', 'Знание Java SE;', 'Высокая мотивация развиваться в области информационных технологий;', 'Владение английским языком на разговорном уровне;', 'Внимательность к деталям, инициативность.'],
      description: '',
      location: ['Москва', 'Санкт-Петербург', 'Воронеж'],
      contacts: {
        email: 'mailto:job@t-systems.ru',
        tel: '',
        person: 'Марианна Мартынова',
        contactLink: 'http://www.t-systems.ru/career/-----/1037764',
      },
      work: false,
    },
    {
      name:'JetBrains',
      companyLink: 'http://jetbrains.ru/',
      logo:'logo/jb.png',
      vacancyName:'Летняя оплачиваемая стажировка',
      requirements: [],
      description: 'Начало конкурсного отбора на стажировку 2017 запланировано на апрель.',
      location: ['Санкт-Петербург'],
      contacts: {
        email: '',
        tel: '',
        person: '',
        contactLink: 'https://vk.com/jb_internship',
      },
      work: false,
    },
    {
      name:'Mail.ru Group',
      companyLink: 'https://corp.mail.ru/ru/',
      logo:'logo/mail.png',
      vacancyName:'Оплачиваемая стажировка для разработчиков на разных языках',
      requirements: [],
      description:'Стажировка для студентов технических специальностей. Проходит в Московской штаб-квартире. Для попадания в группу нужно пройти онлайн-тестирование.',
      location: ['Москва'],
      contacts: {
        email: '',
        tel: '',
        person: '',
        contactLink: 'https://corp.mail.ru/ru/jobs/intern/',
      },
      work: false,
    },
    {
      name:'Яндекс',
      companyLink: 'https://yandex.ru/',
      logo:'logo/ya.jpg',
      vacancyName:'Стажировка в Machine Learning, Perl',
      requirements: [],
      description: 'Стажировка в одном из офисов Яндекса. Несколько программ стажировки: летняя, в течение года, практика для студентов младших курсов. Для попадания в программу требуется выполнить тестовое задание и пройти собеседование. Полный рабочий день или гибкий график.',
      location: ['Москва', 'Санкт-Петербург', 'Екатеринбург', 'Минск'],
      contacts: {
        email: '',
        tel: '',
        person: '',
        contactLink: 'https://yandex.ru/jobs/internship',
      },
      work: false,
    }
  ],

  $scope.totalDisplayed = 5;

	$scope.loadMore = function () {
		return $scope.totalDisplayed += 4;
	};
}]);
