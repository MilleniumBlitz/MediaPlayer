app.controller('globalController', function($scope, $mdDialog) {
    $scope.musiqueEnCoursID = null;
    $scope.checked = false;
    $scope.musiqueEnCoursTitre = "Aucune musique en cours";
    $scope.musiqueEnCoursMP3 = "Au5 - Crossroad (feat. Danyka Nadeau)";
    $scope.typeMedia = "musique";
    $scope.pageClass = 'page';
    $scope.musics = [
        {
            number: 0,
            title: 'Far Away',
            artists: ['Tristam','Braken'],
            duration: '6min57',
            image: 'faraway.jpg',
            chemin: ''
        },
        {
            number: 1,
            title: 'Final Boss',
            artists: ['Nitro Fun'],
            duration: '6min57',
            image: 'finalboss.jpg',
            chemin: ''
        },
        {
            number: 2,
            title: 'Emoji',
            artists: ['Pegboard Nerds'],
            duration: '6min57',
            image: 'emoji.jpg',
            chemin: ''
        }

    ];
    
    $scope.showAlert = function(ev, titre_musique, artistes) {
        $mdDialog.show(
            $mdDialog.alert()
                .parent(angular.element(document.querySelector('#popupContainer')))
                .clickOutsideToClose(true)
                .title('Titre : ' + titre_musique)
                .textContent('Musique de : ' + artistes)
                .ariaLabel('Alert Dialog Demo')
                .ok('OK')
                .targetEvent(ev)
        );
    };
    $scope.changeMusic = function(ev, musicNumber) {
        $scope.musiqueEnCoursTitre = $scope.getMusic(musicNumber).artists.join(', ') + " - " + $scope.getMusic(musicNumber).title;
        $scope.musiqueEnCoursID = musicNumber;
        $scope.musiqueEnCoursMP3 = $scope.getMusic(musicNumber).chemin;
        $scope.checked = true;
    };
    $scope.getMusic = function(musicNumber) {
        return $scope.musics[musicNumber];
    };
});