package model;

public class Comic implements ReadContent{
	private String namaBuku;
	private int tahunTerbit;
	private String penulis;
	private String jumlahChapter;
	private boolean isColored;

	public Comic(String namaBuku, int tahunTerbit, String penulis, String jumlahChapter, boolean isColored) {
		super();
		this.namaBuku = namaBuku;
		this.tahunTerbit = tahunTerbit;
		this.penulis = penulis;
		this.jumlahChapter = jumlahChapter;
		this.isColored = isColored;
	}

	public String getNamaBuku() {
		return namaBuku;
	}

	public int getTahunTerbit() {
		return tahunTerbit;
	}

	public String getPenulis() {
		return penulis;
	}

	public String getJumlahChapter() {
		return jumlahChapter;
	}

	@Override
	public void read() {
		System.out.println("Memuat Panel Gambar...");
		System.out.println("Sedang Membaca Komik " + namaBuku);
	}

	@Override
	public String getJudul() {
		return namaBuku;
	}

	@Override
	public String getDetails() {
		String infoWarna = isColored ? "Full Color" : "Monochrome";
		return "Judul: '" + namaBuku + "', ditulis oleh " + penulis + ", dibuat tahun " + tahunTerbit + ", jumlah chapter " + jumlahChapter
				+ ", " + infoWarna;
	}
	
}
