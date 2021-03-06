@extends('layout.base')

@section('stylesheets')
    <link rel="stylesheet" href="/css/event.css">
@endsection

@section('header')
    <h1 class="header_title">EVENEMENT</h1>
@endsection

@section('content')
    @component('layout.component.search-bar')
        @slot('url')
            /searchEvent
        @endslot
        @slot('placeholder')
            Rechercher un produit...
        @endslot
    @endcomponent
    @if(Auth::user() && Auth::user()->statut_id == 2)
        <div class="evenement_add">
            <img src="/images/add.png" alt="+">
            <a href="{{ route('event.create') }}"><h1>Ajout d'un événement</h1></a>
        </div>
    @endif
    <div class="evenement_list">
        @foreach ($events as $event)
            @if ($event->report == 0)
                <div class="evenement_element">
                    @component('layout.component.list-element')
                        @slot('url')
                            /storage/{{$event->photo}}
                        @endslot
                        @slot('alt')
                            Photo event
                        @endslot
                        @slot('title')<a class="title_event" href="{{ route('event.show',['event' => $event->id])}}">{{$event->nom}}</a>@endslot
                        @slot('description'){{$event->description}}@endslot
                        @slot('actions')
                        @if (Auth::user() && !\App\Participant::where('manifestation_id',$event->id)->where('user_id',Auth::user()->id)->get()->isEmpty())
                            <form action="/event/unregister/{{$event->id}}" method="post">@csrf<button class="button is-valid" type="submit">Se désinscrire</button></form>
                        @else
                            <form action="/event/register/{{$event->id}}" method="post">@csrf<button class="button" type="submit">S'inscrire</button></form>
                        @endif
                        @if(Auth::user() && Auth::user()->statut_id == 2)
                            <form action="{{ route('event.edit',['event' => $event->id]) }}" method="get"><button class="button blue btn_admin" type="submit">Modifier</button></form>
                            <form action="{{ route('event.destroy',['event' => $event->id]) }}" method="post">@method('delete')@csrf<button class="button red btn_admin" type="submit">Supprimer</button></form>
                        @endif
                        @if(Auth::user() && Auth::user()->statut_id == 3)
                            <form action="/event/signal/{{$event->id}}" method="post">@csrf<button class="button red btn_admin" type="submit">Signaler</button></form>
                        @endif
                        <p>{{substr($event->date, 0, 10)}} | {{$event->prix}} €</p>
                        @endslot
                    @endcomponent
                </div>
            @endif
        @endforeach
    </div>

    @isset($eventSelec)
        <div class="modal" id="modal" style="display: block">
                <div class="modal-content">
                    <div class="modal-header">
                        <button id="closeCross" type="button"><img src="/images/fermeture.png" alt="X"></button>
                        <img class="img_modal" src="/storage/{{$eventSelec->photo}}" alt="Photo">
                        <div class="content">
                            <h2 id="modal_title">{{$eventSelec->nom}}</h2>
                            <div class="infos">
                                <p>{{substr($eventSelec->date, 0, 10)}}</p>
                                <p>{{$eventSelec->prix}} €</p>
                            </div>
                            <p>{{$eventSelec->description}}</p>
                            <div class="actions">
                                @if (Auth::user() && !\App\Participant::where('manifestation_id',$eventSelec->id)->where('user_id',Auth::user()->id)->get()->isEmpty())
                                    <form action="/event/unregister/{{$eventSelec->id}}" method="post">@csrf<button class="button is-valid" type="submit">Se désinscrire</button></form>
                                @else
                                    <form action="/event/register/{{$eventSelec->id}}" method="post">@csrf<button class="button" type="submit">S'inscrire</button></form>
                                @endif
                                @if (Auth::user() && Auth::user()->statut_id == 2)
                                    <form action="/event/downloadParticipant/{{$eventSelec->id}}" method="post">@csrf<button class="button is-valid" type="submit">Liste Participants</button></form>
                                @endif
                                <p>{{$nbUser}} participants</p>
                            </div>
                        </div>
                    </div>
                    <form id="ajout_photo" action="{{ route('photoEvent.store') }}" method="post" enctype="multipart/form-data">
                        @csrf
                        <input type="file" name="photo">
                        <input type="hidden" name="event" value="{{$eventSelec->id}}">
                        <button type="submit" class="button blue">Ajouter</button>
                    </form>
                    
                    <div class="galerie_photo">
                        @foreach ($photos as $photo)
                            @if ($photo->report == 0)
                                <a href="{{ route('photoEvent.show', ['photoEvent' => $photo->id]) }}"><img class="photo" src="/storage/{{$photo->url}}" alt="Photo"></a>
                            @endif
                        @endforeach
                    </div>
                </div>
        </div>
    @endisset

    @isset($photoEvent)
        @if ($photoEvent->report == 0)
            <div class="modal" id="modal" style="display: block">
                <div class="modal-content">
                    <div class="modal-header">
                        <button id="closeCross" type="button"><img src="/images/fermeture.png" alt="X"></button>
                        <img class="img_modal" src="/storage/{{$photoEvent->url}}" alt="Photo">
                        <div class="content">
                            <h2 id="modal_title">{{$eventPhoto->nom}}</h2>
                            <div class="infos">
                                <p>Evenement du : {{substr($eventPhoto->date, 0, 10)}}</p>
                                <div class="modal_like">
                                    <p>{{\App\Like::where('photo_Id', $photoEvent->id)->count()}} like</p>
                                    @if (Auth::user() && !\App\Like::where('photo_Id', $photoEvent->id)->where('user_id', Auth::user()->id)->get()->isEmpty())
                                        <form action="/photoEvent/unlike/{{$photoEvent->id}}" method="post">@csrf<button class="like_button" type="submit"><img src="/images/icons8-heart-outline-52-green.png" alt="Like"></button></form>
                                    @else
                                        <form action="/photoEvent/like/{{$photoEvent->id}}" method="post">@csrf<button class="like_button" type="submit"><img src="/images/icons8-heart-outline-52.png" alt="Like"></button></form>
                                    @endif
                                </div>
                                @if (Auth::user() && Auth::user()->statut_id == 3)
                                    <form action="/photoEvent/signaler/{{$photoEvent->id}}" method="post">@csrf<button class="button red" type="submit">Signaler</button></form>
                                @endif
                                @if (Auth::user() && Auth::user()->statut_id == 2)
                                    <form action="{{ route('photoEvent.destroy', ['photoEvent' => $photoEvent->id]) }}" method="post">
                                        @csrf
                                        @method('delete')
                                        <button class="button red" type="submit">Supprimer</button>
                                    </form>
                                @endif
                            </div>
                            
                            <div class="commentaire_list">
                                <form action="/photoEvent/comment/{{$photoEvent->id}}" method="post">
                                    @csrf
                                    <input id="input_com" type="text" name="commentaire" placeholder="Ajouter un commentaire ici ...">
                                    <button class="button blue" type="submit">Ajouter</button>
                                </form>
                                <div class="commentaire_content">
                                    @foreach ($commentaires as $commentaire)
                                        @if ($commentaire->report == 0)
                                            <div class="commentaire_element">
                                                <img class="com_avatar" src="/storage/{{\App\User::find($commentaire->user_id)->photo}}" alt="">
                                                <div class="com_text">
                                                    <h3 class="com_username">{{\App\User::find($commentaire->user_id)->name}} {{\App\User::find($commentaire->user_id)->prenom}}</h3>
                                                    <p class="com_desc">{{$commentaire->contenu}}</p>
                                                </div>
                                                @if (Auth::user() && Auth::user()->statut_id == 2)
                                                    <form action="/photoEvent/comment/destroy/{{$commentaire->id}}" method="post">
                                                        @csrf
                                                        @method('delete')
                                                        <button class="button red" type="submit">Supprimer</button>
                                                    </form>
                                                @endif
                                                @if (Auth::user() && Auth::user()->statut_id == 3)
                                                    <form action="/photoEvent/comment/signaler/{{$commentaire->id}}" method="post">@csrf<button class="button red" type="submit">Signaler</button></form>
                                                @endif
                                            </div> 
                                        @endif
                                    @endforeach
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        @endif
    @endisset
@endsection