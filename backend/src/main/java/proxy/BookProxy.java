package proxy;

import model.ReadContent;

public class BookProxy {
    
    private ReadContent realBook;

    public BookProxy(ReadContent realBook) {
        this.realBook = realBook;
    }

    public void read() {
        System.out.println("Proxy Validation");
        System.out.println("Access DB");
       
        if (realBook != null) {
            realBook.read(); 
        }
    }
}