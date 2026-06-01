package adapter;
import model.*;
public class MagazineAdapter implements ReadContent {
    private Magazine magazine;
    public MagazineAdapter(Magazine magazine) { this.magazine = magazine; }
    public void read() { magazine.read(); }
    public String getJudul() { return magazine.getJudul(); }
    public String getDetails() { return magazine.getDetails(); }
    public Long getId() { return magazine.getId(); }
    public void setId(Long id) { magazine.setId(id); }
    public int getReadCount() { return magazine.getReadCount(); }
    public void incrementReadCount() { magazine.incrementReadCount(); }
    public String getType() { return magazine.getType(); }
}