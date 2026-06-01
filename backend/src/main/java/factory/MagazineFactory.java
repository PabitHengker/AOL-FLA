package factory;
import model.*;
public class MagazineFactory extends BookFactory {
    public ReadContent createBook(String title){ return new Magazine(title); }
}