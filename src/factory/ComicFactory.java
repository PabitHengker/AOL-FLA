package factory;
import model.*;
public class ComicFactory extends BookFactory{
    public ReadContent createBook(){ return new Comic("One Piece"); }
}