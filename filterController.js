angular.module('group-filter').controller('filterController', function ($scope) {    
    
    $scope.listCars = [
        { category: 'Suv', brand: 'Volkswagen', model: 'Tiguan' },
        { category: 'Suv', brand: 'Chevrolet', model: 'Captiva' },
        { category: 'Sedan', brand: 'Fiat', model: 'Cronos' },
        { category: 'Sedan', brand: 'Volkswagen', model: 'Virtus' },
        { category: 'Hatch', brand: 'Chevrolet', model: 'Onix' },
        { category: 'Hatch', brand: 'Ford', model: 'Ka' }
    ];

    $scope.filters = [
        { id: 1, name: 'Categoria' },
        { id: 2, name: 'Marca' },
        { id: 3, name: 'Modelo' }
    ];

    $scope.changeOption = function() {

        if ($scope.selectedFilter === 1) {
            
        }

    };

});