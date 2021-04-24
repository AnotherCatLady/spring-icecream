package de.weiss.icecream.database.entity;

import com.fasterxml.jackson.annotation.JsonTypeName;
import java.util.List;
import javax.persistence.CollectionTable;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;

@Entity
@JsonTypeName(value = "WATER")
public class WaterIce extends Icecream{

  @ElementCollection
  @CollectionTable(name = "flavours")
  private List<String> flavours;

  protected WaterIce(Integer id, String name, Integer calories, String intolerances,
      double wholesalePrice, double retailPrice, List<String> ingredients, Category category,
      List<String> flavours) {
    super(id, name, calories, intolerances, wholesalePrice, retailPrice, ingredients, category);
    this.setCategory(Category.WATER);
    this.flavours = flavours;
  }

  public WaterIce() {
    setCategory(Category.WATER);
  }

  public List<String> getFlavours() {
    return flavours;
  }

  public void setFlavours(List<String> flavours) {
    this.flavours = flavours;
  }
}
