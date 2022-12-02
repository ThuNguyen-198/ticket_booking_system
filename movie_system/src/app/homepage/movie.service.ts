import { HttpClient } from "@angular/common/http";
import { Movie } from "./movie.model";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
@Injectable({ providedIn: "root" })
export class MovieService {

    private movies: Movie[] = [];
    private moviesUpdated = new Subject<Movie[]>();
    constructor(private http: HttpClient) { }

    getMovies() {
        this.http.get<{ message: String, posts: Movie[] }>('http://localhost:3000/movies')
            .subscribe((moviesData) => {
                this.movies = moviesData.posts;
                this.moviesUpdated.next([...this.movies]);
            });
        console.log(this.moviesUpdated.asObservable());
        return this.moviesUpdated.asObservable();
    }
} 