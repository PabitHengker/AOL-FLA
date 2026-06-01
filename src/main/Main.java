package main;

import java.util.ArrayList;
import java.util.Scanner;

import factory.BookFactory;
import factory.ComicFactory;
import factory.MagazineFactory;
import factory.NovelFactory;
import model.ReadContent;
import proxy.BookProxy;

public class Main { 
    private ArrayList<ReadContent> bookList = new ArrayList<>();
    private Scanner scan = new Scanner(System.in);

    public Main() {
        int menu = -1;

        do {
            System.out.println("\n=== SMART BOOK SYSTEM ===");
            System.out.println("1. Create Book");
            System.out.println("2. Read Book");
            System.out.println("3. Exit");
            System.out.println("Choose menu [1-3]: ");
            
            try {
                menu = scan.nextInt();
            } catch (Exception e) {
                System.out.println("Input must be a number!");
                menu = -1;
            }
            scan.nextLine(); // Consume newline

            switch (menu) {
                case 1:
                    menuCreateBook();
                    break;
                case 2:
                    menuReadBook();
                    break;
                case 3:
                    System.out.println("Thank you for using the application!");
                    break;
                default:
                    System.out.println("Invalid menu! Please try again.");
                    break;
            }
        } while (menu != 3);
    }

    private void menuCreateBook() {
        System.out.println("\n--- Create Book ---");
        System.out.println("1. Comic");
        System.out.println("2. Magazine");
        System.out.println("3. Novel");
        System.out.println("Choose book type to create: ");
        int type = scan.nextInt();
        scan.nextLine(); 

        BookFactory factory = null;
        if (type == 1) {
            factory = new ComicFactory();
        } else if (type == 2) {
            factory = new MagazineFactory();
        } else if (type == 3) {
            factory = new NovelFactory();
        } else {
            System.out.println("Invalid type! Failed to create book.");
            return;
        }

        ReadContent newBook = factory.createBook();
        bookList.add(newBook);
        System.out.println("Book successfully created and added to storage!");
    }

    private void menuReadBook() {
        System.out.println("\n--- Read Book ---");
        
        if (bookList.isEmpty()) {
            System.out.println("No books available. Please create a book first!");
            return;
        }

        System.out.println("Available Books:");
        for (int i = 0; i < bookList.size(); i++) {
        	String bookName = bookList.get(i).getJudul();
            System.out.println((i + 1) + ". " + bookName );
        }

        System.out.println("Choose book number to read: ");
        int choice = scan.nextInt();
        scan.nextLine(); // Consume newline

        if (choice < 1 || choice > bookList.size()) {
            System.out.println("Book not found!");
        } else {
            ReadContent selectedBook = bookList.get(choice - 1);
            BookProxy proxyBook = new BookProxy(selectedBook);
            System.out.println("\n--- Executing via Proxy ---");
            proxyBook.read();
        }
    }

    public static void main(String[] args) {
        new Main();
    }
}