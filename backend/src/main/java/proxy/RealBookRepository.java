package proxy;
import model.ReadContent;
public class RealBookRepository implements BookRepository{
    private ReadContent book;
    public RealBookRepository(ReadContent book){this.book=book;}
    public ReadContent getBook(){System.out.println("Access DB"); return book;}
}