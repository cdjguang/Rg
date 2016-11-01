app.controller('ChangeCtrl', ['$scope','$state','$http', function($scope,$state,$http) {

	/*城市三级联动*/
	$scope.city = false;
	$scope.provienceName = '北京';
	$scope.ShowOrNot = function () {
		
		if($scope.city&&$scope.city == false){
			$scope.city = true;
		}else if($scope.city == true){
			$scope.city = false;
		}
		
		$http.get('js/controllers/city.json').success(function(response){
			console.log(response);
			$scope.provience = response;
		}).error(function(err){
			
		})
		
	}
	
	$scope.showProvience = function (item) {
		console.log(item);
		for(var ele in $scope.provience){
			if($scope.provience[ele].name == item){
				$scope.city = $scope.provience[ele].child;
				$scope.cityName = $scope.provience[ele].child[0].name;
				return;
			}
		}
	}
	
	




	//数据
//	$scope.content = [{
//		'name': '张春玲',
//		'age': 28
//	}, {
//		'name': '王晰',
//		'age': 26
//	}, {
//		'name': '吴正青',
//		'age': 66
//	}];

	/** 拖拽成功触发方法
	 *   index 拖拽后落下时的元素的序号（下标）
	 *   obj被拖动数据对象
	 */
//	$scope.dropComplete = function(index, obj) {
//		//重新排序
//		var idx = $scope.content.indexOf(obj);
//		$scope.content.splice(idx, 1);
//		$scope.content.splice(index, 0, obj);
//		console.log($scope.content);
//	};
//
//	$scope.draggableObjects = [{
//		name: 'one'
//	}, {
//		name: 'two'
//	}, {
//		name: 'three'
//	}];
//	$scope.onDropComplete = function(index, obj, evt) {
//		var otherObj = $scope.draggableObjects[index];
//		var otherIndex = $scope.draggableObjects.indexOf(obj);
//		$scope.draggableObjects[index] = obj;
//		$scope.draggableObjects[otherIndex] = otherObj;
//		console.log($scope.draggableObjects);
//	}

}])
