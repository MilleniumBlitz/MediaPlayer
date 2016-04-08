// CONTROLLERS ============================================
// home page controller
app.controller('musicController', function($scope) {
    $scope.pageClass = 'page';
    $scope.musics = [
        {
            title: 'Talent Goes By',
            artists: ['Tristam'],
            image: '1'
        },
        {
            title: 'Far Away',
            artists: ['Tristam','Braken'],
            image: '2'
        },
        {
            title: 'Final Boss',
            artists: ['Nitro Fun'],
            image: '3'
        },
        {
            title: 'Emoji',
            artists: ['Pegboard Nerds'],
            image: '4'
        },
        {
            title: 'Talent Goes By',
            artists: ['Tristam'],
            image: '1'
        },
        {
            title: 'Far Away',
            artists: ['Tristam','Braken'],
            image: '2'
        },
        {
            title: 'Final Boss',
            artists: ['Nitro Fun'],
            image: '3'
        },
        {
            title: 'Emoji',
            artists: ['Pegboard Nerds'],
            image: '4'
        },
        {
            title: 'Talent Goes By',
            artists: ['Tristam'],
            image: '1'
        },
        {
            title: 'Far Away',
            artists: ['Tristam','Braken'],
            image: '2'
        },
        {
            title: 'Final Boss',
            artists: ['Nitro Fun'],
            image: '3'
        },
        {
            title: 'Emoji',
            artists: ['Pegboard Nerds'],
            image: '4'
        },
        {
            title: 'Talent Goes By',
            artists: ['Tristam'],
            image: '1'
        },
        {
            title: 'Far Away',
            artists: ['Tristam','Braken'],
            image: '2'
        },
        {
            title: 'Far Away',
            artists: ['Tristam','Braken'],
            image: '2'
        }

    ];
    $scope.topDirections = ['left', 'up'];
    $scope.bottomDirections = ['down', 'right'];
    $scope.isOpen = false;
    $scope.availableModes = ['md-fling', 'md-scale'];
    $scope.selectedMode = 'md-fling';
    $scope.availableDirections = ['up', 'down', 'left', 'right'];
    $scope.selectedDirection = 'up';
});

app.controller('videoController', function($scope) {
    $scope.pageClass = 'page';});