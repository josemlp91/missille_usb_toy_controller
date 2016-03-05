angular.module('starter.services', [])

.factory('MissilService',function($http, $q){

      return{
        // Url del host
        url:"http://"+ "" + "/",

        connect: function(missile_host_ip){
          this.url="http://"+ missile_host_ip + "/"
          missile_host=missile_host_ip;
          console.log(missile_host);

          uri=this.url + "connect";
          var deferred = $q.defer();

          $http.get(uri).success(function(data){
            deferred.resolve(data);
          }).error(function(){
            deferred.reject("An error occured while call to api");
          });
          return deferred.promise;
        },

        print :  function(){
          console.log(missile_host);
        },

        up: function(){
          uri=this.url + "up"
          var deferred = $q.defer();
          $http.get(uri).success(function(data){
            deferred.resolve(data);
          }).error(function(){
            deferred.reject("An error occured while call to api");
          });
          return deferred.promise;
      },

      down: function(){
        uri=this.url + "down"
        var deferred = $q.defer();
        $http.get(uri).success(function(data){
          deferred.resolve(data);
        }).error(function(){
          deferred.reject("An error occured while call to api");
        });
        return deferred.promise;
    },

      left: function(){
        uri=this.url + "left"
        var deferred = $q.defer();
        $http.get(uri).success(function(data){
          deferred.resolve(data);
        }).error(function(){
          deferred.reject("An error occured while call to api");
        });
      },

      right: function(){
        uri=this.url + "right"
        var deferred = $q.defer();
        $http.get(uri).success(function(data){
          deferred.resolve(data);
        }).error(function(){
          deferred.reject("An error occured while call to api");
        });
      },

      fire: function(){
        uri=this.url + "fire"
        var deferred = $q.defer();
        $http.get(uri).success(function(data){
          deferred.resolve(data);
        }).error(function(){
          deferred.reject("An error occured while call to api");
        });

        return deferred.promise;
      }
  }
});
