@extends('flipninja/file-manager::example.base')
@include('flipninja/file-manager::manager', ['path' => '/'])

@section('content')
    @yield('manager')
@endsection
