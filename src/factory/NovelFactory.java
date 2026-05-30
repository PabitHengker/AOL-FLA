package factory;
import model.*;
public class NovelFactory extends BookFactory{
    public ReadContent createBook(){ return new Novel("Laskar Pelangi"); }
}