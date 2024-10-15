<!DOCTYPE html>
<html lang="en" ng-app="ForgotPasswordApp">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Forgot Password</title>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular.min.js"></script>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #d3d3d3;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
        }
        .forgot-password-container {
            background-color: #f0e4c3;
            padding: 30px;
            border-radius: 10px;
            border: 1px solid #a9a9a9; 
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            width: 300px;
            text-align: center;
        }
        h2 {
            color: #333;
            font-size: 1.5em;
            margin-bottom: 20px;
        }
        input {
            padding: 10px;
            width: 100%;
            margin-bottom: 20px;
            border: 1px solid #ccc;
            border-radius: 5px;
            font-size: 1em;
        }
        button {
            padding: 10px 20px;
            background-color: #a9a9a9; 
            color: white;
            border: none;
            border-radius: 5px;
            font-size: 1em;
            cursor: pointer;
            width: 100%;
        }
        button:hover {
            background-color: #888; 
        }
        a {
            color: #000;
            font-size: 0.9em;
            text-decoration: none;
            display: block;
            margin-bottom: 10px;
        }
        a:hover {
            text-decoration: underline;
        }
        p {
            color: red;
            font-size: 0.9em;
        }
    </style>
</head>
<body ng-controller="ForgotPasswordController">

<div class="forgot-password-container">
    <h2>Forgot Password</h2>
    <form ng-submit="forgotPassword()">
        <input type="email" ng-model="user.email" placeholder="Enter Email-ID" required />
        <a href="#/login">Back to Sign in</a>
        <button type="submit">Send a Mail</button>
    </form>
    <p>{{ message }}</p>
</div>

<script>
    var app = angular.module('ForgotPasswordApp', []);

    app.controller('ForgotPasswordController', function($scope, $timeout) {
        $scope.user = {};

        $scope.forgotPassword = function() {
            if ($scope.user.email) {
                $scope.message = "Sending reset link...";
                // Simulating API delay
                $timeout(function() {
                    if ($scope.user.email === "test@example.com") {
                        $scope.message = "Password reset link sent to your email!";
                    } else {
                        $scope.message = "Error: Email not found!";
                    }
                }, 2000);
            } else {
                $scope.message = "Please enter a valid email!";
            }
        };
    });
</script>

</body>
</html>
