@extends('layout.duo')

@section('stylesheets')
    <link rel="stylesheet" href="/css/ideas.css">
@endsection

@section('title')
    Créer une idée
@endsection

@section('content_form')
    @if ($errors->any())
        <div id="informations">
                @foreach ($errors->all() as $error)
                    <a id="information">{{ $error }}</a>
                @endforeach
        </div>
    @endif
    <form id="form-idea" action="/ideas" method="post">
        @csrf
        <label for="nom" class="title_input_left">Titre :</label>
        <input id="nom" class="input_left" type="text" name="nom">
        <label for="description" id="description-form" class="title_input_left">Description :</label>
        <textarea  id="description" class="input_left" name="description" maxlength="255">
        </textarea>
        <input id="form-submit" class="button btn_left" type="submit" value="Créer">
    </form>
@endsection
