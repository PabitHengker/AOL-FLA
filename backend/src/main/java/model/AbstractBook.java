package model;

public abstract class AbstractBook implements ReadContent {
    private Long id;
    private String judul;
    private int readCount;
    private String type;

    public AbstractBook(String judul, String type) {
        this.judul = judul;
        this.type = type;
        this.readCount = 0;
    }

    public void read() {
        System.out.println("Reading " + type + ": " + judul);
    }

    public String getJudul() { return judul; }
    public String getDetails() { return type + ": " + judul; }
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public int getReadCount() { return readCount; }
    public void incrementReadCount() { this.readCount++; }
    public String getType() { return type; }
}
