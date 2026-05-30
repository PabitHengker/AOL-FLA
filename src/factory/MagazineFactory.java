package factory;
import model.*; import adapter.*;
public class MagazineFactory extends BookFactory{
    public ReadContent createBook(){ return new MagazineAdapter(new Magazine("National Geographic")); }
}