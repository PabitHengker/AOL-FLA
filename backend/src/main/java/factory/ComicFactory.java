package factory;
import model.*;
public class ComicFactory extends BookFactory {
    public ReadContent createBook(String title){ return new Comic(title); }
}