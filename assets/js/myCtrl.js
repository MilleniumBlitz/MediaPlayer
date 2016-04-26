// CONTROLLERS ============================================
// home page controller
app.controller('musicController', function($scope, $mdDialog) {
    $scope.musiqueEnCours = "Aucune musique en cours";
    $scope.pageClass = 'page';
    $scope.musics = [
        {
            number: 0,
            title: 'Talent Goes By',
            artists: ['Tristam'],
            duration: '6min57',
            image: '1'
        },
        {
            number: 1,
            title: 'Far Away',
            artists: ['Tristam','Braken'],
            duration: '6min57',
            image: '2'
        },
        {
            number: 2,
            title: 'Final Boss',
            artists: ['Nitro Fun'],
            duration: '6min57',
            image: '3'
        },
        {
            number: 3,
            title: 'Emoji',
            artists: ['Pegboard Nerds'],
            duration: '6min57',
            image: '4'
        },
        {
            number: 4,
            title: 'Talent Goes By',
            artists: ['Tristam'],
            duration: '6min57',
            image: '1'
        },
        {
            number: 5,
            title: 'Far Away',
            artists: ['Tristam','Braken'],
            duration: '6min57',
            image: '2'
        },
        {
            number: 6,
            title: 'Final Boss',
            artists: ['Nitro Fun'],
            duration: '6min57',
            image: '3'
        },
        {
            number: 7,
            title: 'Emoji',
            artists: ['Pegboard Nerds'],
            duration: '6min57',
            image: '4'
        },
        {
            number: 8,
            title: 'Talent Goes By',
            artists: ['Tristam'],
            duration: '6min57',
            image: '1'
        },
        {
            number: 9,
            title: 'Far Away',
            artists: ['Tristam','Braken'],
            duration: '6min57',
            image: '2'
        },
        {
            number: 10,
            title: 'Final Boss',
            artists: ['Nitro Fun'],
            duration: '6min57',
            image: '3'
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
        $scope.musiqueEnCours = $scope.getMusic(musicNumber).artists.join(', ') + " - " + $scope.getMusic(musicNumber).title;
    };
    $scope.getMusic = function(musicNumber) {
        return $scope.musics[musicNumber];
    };
});

app.controller('videoController', function($scope) {
    $scope.pageClass = 'page';});