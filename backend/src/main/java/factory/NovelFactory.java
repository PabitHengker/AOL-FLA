package factory;
import model.*;
public class NovelFactory extends BookFactory {
    public ReadContent createBook(String title){ return new Novel(title); }
}