package factory;
import model.ReadContent;
public abstract class BookFactory {
    public abstract ReadContent createBook(String title);
}