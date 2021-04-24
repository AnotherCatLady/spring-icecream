package de.weiss.icecream.database;

import de.weiss.icecream.database.entity.Icecream;
import org.springframework.data.repository.CrudRepository;

public interface IcecreamRepository extends CrudRepository<Icecream, Integer>  {

}
