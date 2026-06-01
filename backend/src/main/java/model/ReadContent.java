package model;
public interface ReadContent {
    void read();
    String getJudul();
    String getDetails();
    Long getId();
    void setId(Long id);
    int getReadCount();
    void incrementReadCount();
    String getType();
}