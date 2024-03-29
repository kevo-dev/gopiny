<?php

    header('Access-Control-Allow-Origin: *');   
    header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
    header('Access-Control-Allow-Headers: *');

    include_once 'review/review.service.php';
    include_once 'package/package.service.php';

    // get the database connection
    function getConnection(){
        
        $host = getenv('DB_HOST');
        $username = getenv('DB_USERNAME');
        $password = getenv('DB_PASSWORD');
        $database = getenv('DB_DATABASE');

        try{
            $conn = new PDO("mysql:host=$host;dbname=$database", $username, $password);
            return $conn;
        }catch(PDOException $exception){
            echo "Could not connect to the database $database: " . $exception->getMessage();
        }
    }

    $request_method = isset($_SERVER['REQUEST_METHOD'])?$_SERVER['REQUEST_METHOD']:'';
    // $data = json_decode(file_get_contents('php://input'), true);

    if($request_method == "GET"){

		$action = $_REQUEST['action'];
		// $action = null;
        $filterBy = isset($_GET['filterBy'])?json_decode($_GET['filterBy']):'';

        $connection = getConnection();

		switch ($action) {
		    case "getPackages":
                // $json = getPackages($connection);
                $json = getPackages($connection, $filterBy);
                break;
            case "getReviews":
                $json = getReviews($connection);
                break;
		    default:
                $json = array("success" => false, "Info" => "Request method not available!");
		}
        // $json = $_REQUEST;
        
        $connection = null;
		echo json_encode($json);

    }elseif($request_method == "POST"){

		$action = $_REQUEST['action'];
		$action = null;
        $connection = getConnection();

		switch ($action) {
		    case "addPackages":
                $json = addPackages($connection, $data);
                break;
            case "addReviews":
                $json = addReviews($connection, $data);
                break;
		    default:
                $json = array("success" => false, "Info" => "Request method not available!");
		}

        $json = $_POST;
        // $json = $data;
        $connection = null;
		echo json_encode($json);

    }elseif($request_method == "PUT"){

        $action = $_REQUEST['action'];
        $connection = getConnection();

		switch ($action) {
		    case "updatePackages":
                $json = updatePackages($connection, $data);
                break;
            case "updateReviews":
                $json = updateReviews($connection, $data);
                break;
		    default:
                $json = array("success" => false, "Info" => "Request method not available!");
		}

        $connection = null;
		echo json_encode($json);
        
	}else{
		$json = array("success" => false, "Info" => "Request method not accepted!");
		echo json_encode($json);
	}
    
?>