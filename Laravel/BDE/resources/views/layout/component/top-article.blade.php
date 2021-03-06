<div class="carousel">
    <img class="arrow" src="/images/left-arrow.png" alt="Left arrow" onclick="previous()">
    <div class="content">
        <div class="infos">
            <h2>{{$name}}</h2>
            <p>{{$description}}</p>
            <div class="actions">
                <div class="price">
                    {{$price}}€ 
                    <span>TTC</span> 
                </div>
                @if(Auth::user() && App\Achat::where('article_id', '=', $id)->where('user_id', '=', Auth::user()->id)->count())
                    <button class="button is-valid">
                        <img src="/images/check.png" alt="Article commandé">
                    </button>
                @else
                    <form method="POST" action="/purchase">
                        @csrf
                        <button class="button" type="submit">Commander</button>
                        <input type="hidden" name="id" value="{{$id}}">
                    </form>
                @endif
            </div>
        </div>
        <div class="pic">
            <img src="{{$src}}" alt="{{$alt}}">
        </div>
    </div>
    
    <img class="arrow" src="/images/right-arrow.png" alt="Right arrow" onclick="next()">
</div>