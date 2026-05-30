package adapter;
import model.*;
public class MagazineAdapter implements ReadContent{
    private Magazine magazine;
    public MagazineAdapter(Magazine magazine){this.magazine=magazine;}
    public void read(){System.out.println("Reading Magazine: "+magazine.getNamaBuku());}
    public String getJudul(){return magazine.getNamaBuku();}
    public String getDetails(){return "Magazine: "+magazine.getNamaBuku();}
}