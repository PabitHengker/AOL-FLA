package model;

public class Magazine {
	private String namaBuku;
	private String penerbit;
	private int tahunTerbit;
	private String penulis;
	private String jumlahHalaman;
	private String sinopsis;

	public Magazine(String namaBuku, String penerbit, int tahunTerbit, String penulis, String jumlahHalaman,
			String sinopsis) {
		super();
		this.namaBuku = namaBuku;
		this.penerbit = penerbit;
		this.tahunTerbit = tahunTerbit;
		this.penulis = penulis;
		this.jumlahHalaman = jumlahHalaman;
		this.sinopsis = sinopsis;
	}

	public String getNamaBuku() {
		return namaBuku;
	}

	public String getPenerbit() {
		return penerbit;
	}

	public int getTahunTerbit() {
		return tahunTerbit;
	}

	public String getPenulis() {
		return penulis;
	}

	public String getJumlahHalaman() {
		return jumlahHalaman;
	}

	public String getSinopsis() {
		return sinopsis;
	}

}
