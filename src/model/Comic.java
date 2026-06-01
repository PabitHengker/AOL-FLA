package model;
public class Comic implements ReadContent {
    private String judul;
    public Comic(String judul){this.judul=judul;}
    public void read(){System.out.println("Reading Comic: "+judul);}
    public String getJudul(){return judul;}
    public String getDetails(){return "Comic: "+judul;}
}