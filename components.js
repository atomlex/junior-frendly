var juniorFriendlyApp = angular.module('juniorFriendlyApp', ['ngSanitize', 'ngRoute']);

juniorFriendlyApp.config(function($routeProvider, $locationProvider) {
    $routeProvider

        .when('junior-frendly/about', {
            templateUrl : 'parts/about.html',
        })

        .when('junior-frendly/work', {
            templateUrl : 'parts/work-list.html',
            controller  : 'CompanyListController'
        })

        .when('junior-frendly/traineeship', {
            templateUrl : 'parts/traineeship-list.html',
            controller  : 'CompanyListController'
        })

        .otherwise({
          redirectTo: 'junior-frendly/',
          templateUrl: 'parts/main.html'
        });

        $locationProvider.html5Mode(true);
});


juniorFriendlyApp.controller('MenyController', function MenyController($scope) {
  $scope.menuLinks = [
    {
      link: 'junior-frendly/',
      lable: 'Главная'
    },
    {
      link: 'junior-frendly/work',
      lable: 'Работа'
    },
    {
      link: 'junior-frendly/traineeship',
      lable: 'Стажировка'
    },
    {
      link: 'junior-frendly/about',
      lable: 'О проекте'
    }
  ]
});

juniorFriendlyApp.controller('CompanyListController', function CompanyListController($scope) {
  $scope.companies = [
    {
      name: 'Тинькофф банк',
      companyLink: 'https://www.tinkoff.ru/',
      logo:'logo/t.jpg',
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
      email: '',
      tel: '',
      person: '',
      contactLink: 'https://career.ru/vacancy/19329610',
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
      contactLink: '',
      work: true,
    },
    {
      name:'learn AngularJS',
      companyLink: 'https://www.tinkoff.ru/',
      logo:'true',
      vacancyName:'',
      requirements: '',
      description: '',
      location: [''],
      contactLink: '',
      work: true,
    },
    {
      name:'learn AngularJS',
      companyLink: 'https://www.tinkoff.ru/',
      logo:'true',
      vacancyName:'',
      requirements: '',
      description: '',
      location: [''],
      contactLink: '',
      work: true,
    },
    {
      name:'learn AngularJS',
      companyLink: 'https://www.tinkoff.ru/',
      logo:'true',
      vacancyName:'',
      requirements: '',
      description: '',
      location: [''],
      contactLink: '',
      work: true,
    },
    {
      name:'learn AngularJS',
      companyLink: 'https://www.tinkoff.ru/',
      logo:'true',
      vacancyName:'',
      requirements: '',
      description: '',
      location: [''],
      contactLink: '',
      work: true,
    },
    {
      name:'learn AngularJS',
      companyLink: 'https://www.tinkoff.ru/',
      logo:'true',
      vacancyName:'',
      requirements: '',
      description: '',
      location: [''],
      contactLink: '',
      work: true,
    }
  ],

  $scope.totalDisplayed = 5;

	$scope.loadMore = function () {
		$scope.totalDisplayed += 4;

	};
});
