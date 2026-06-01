package com.FLA.LibraryProject.dto;

public class BookDTO {
    private Long id;
    private String type;
    private String title;
    private int readCount;

    public BookDTO() {}

    public BookDTO(Long id, String type, String title, int readCount) {
        this.id = id;
        this.type = type;
        this.title = title;
        this.readCount = readCount;
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getType() { return type; }
    public void setType(String type) { this.type = type; }
    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }
    public int getReadCount() { return readCount; }
    public void setReadCount(int readCount) { this.readCount = readCount; }
}
