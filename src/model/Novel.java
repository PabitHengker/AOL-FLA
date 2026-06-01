package model;
public class Novel implements ReadContent {
    private String judul;
    public Novel(String judul){this.judul=judul;}
    public void read(){System.out.println("Reading Novel: "+judul);}
    public String getJudul(){return judul;}
    public String getDetails(){return "Novel: "+judul;}
}