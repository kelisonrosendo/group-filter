angular.module("group-filter").controller("filterController", function($scope) {
  $scope.selectedFilter = null;
  $scope.addedFilters = [];
  let grouped = null;

  function startList() {
    $scope.listCars = [
      { category: "Suv", brand: "Volkswagen", model: "T-Cross" },
      { category: "Suv", brand: "Volkswagen", model: "Tiguan" },
      { category: "Suv", brand: "Chevrolet", model: "Equinox" },
      { category: "Suv", brand: "Chevrolet", model: "Tracker" },
      { category: "Sedan", brand: "Fiat", model: "Cronos" },
      { category: "Sedan", brand: "Volkswagen", model: "Virtus" },
      { category: "Sedan", brand: "Ford", model: "Fusion" },
      { category: "Sedan", brand: "Ford", model: "Ka" },
      { category: "Hatch", brand: "Chevrolet", model: "Onix" },
      { category: "Hatch", brand: "Ford", model: "Ka" },
      { category: "Hatch", brand: "Ford", model: "Fiesta" }
    ];
  }

  startList();

  $scope.filters = [
    { id: 1, name: "Categoria" },
    { id: 2, name: "Marca" },
    { id: 3, name: "Modelo" }
  ];

  $scope.changeFilter = function() {
    switch ($scope.selectedFilter.id) {
      case 1:
        grouped = groupBy($scope.listCars, car => car.category);
        $scope.listItems = Array.from(grouped.keys());
        break;

      case 2:
        grouped = groupBy($scope.listCars, car => car.brand);
        $scope.listItems = Array.from(grouped.keys());
        break;

      case 3:
        grouped = groupBy($scope.listCars, car => car.model);
        $scope.listItems = Array.from(grouped.keys());
        break;
    }
  };

  function groupBy(list, keyGetter) {
    const map = new Map();
    list.forEach(item => {
      const key = keyGetter(item);
      const collection = map.get(key);
      if (!collection) {
        map.set(key, [item]);
      } else {
        collection.push(item);
      }
    });
    return map;
  }

  $scope.addFilter = function() {
    $scope.filters = $scope.filters.filter(function(value) {
      return value.id !== $scope.selectedFilter.id;
    });

    $scope.addedFilters.push($scope.selectedFilter);
    $scope.selectedFilter = null;

    filteredSearch();
  };

  $scope.removeFilter = function(filter) {
    $scope.addedFilters.splice($scope.addedFilters.indexOf(filter), 1);

    $scope.selectedFilter = null;
    delete filter.value;
    $scope.filters.push(filter);

    filteredSearch();
  };

  function filteredSearch() {
    startList();

    $scope.addedFilters.forEach(function(valueFilter) {
      switch (valueFilter.id) {
        case 1:
          $scope.listCars = $scope.listCars.filter(function(valueList) {
            return valueList.category === valueFilter.value;
          });
          break;

        case 2:
          $scope.listCars = $scope.listCars.filter(function(valueList) {
            return valueList.brand === valueFilter.value;
          });
          break;

        case 3:
          $scope.listCars = $scope.listCars.filter(function(valueList) {
            return valueList.model === valueFilter.value;
          });
          break;
      }
    });
  }
});
