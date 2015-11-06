(function() {
  'use strict';

  /**
   * @name  config
   * @description config block
   */
  function config($stateProvider) {
    $stateProvider
      .state('root.professors', {
        url: '/professors',
        views: {
          '@': {
            templateUrl: 'src/app/professors/professors.tpl.html',
            controller: 'ProfessorsCtrl as professors'
          }
        }
      });
  }

  /**
   * @name  ProfessorsCtrl
   * @description Controller
   */
  function ProfessorsCtrl(ProfessorsService) {
    var professors = this;
    var init = function(){
      professors.profs = ProfessorsService.getProfessors();
      professors.selectedProf = undefined;
      professors.orderByDate = function(index) {
        var stringDate = professors.selectedProf.reviews[index].createDate;
        return new Date(stringDate);
      };
    }();
  }

  angular.module('professors', [])
    .config(config)
    .controller('ProfessorsCtrl', ProfessorsCtrl);
})();
